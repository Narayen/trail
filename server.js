var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var mysql = require('mysql');

var server = http.Server(app);

var app = express();
var PORT = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname ,'public')));

app.get('/', (req, res) => res.render('pages/html/index.html'));

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

var sqlInfo = {
    host: 'remotemysql.com',
    user: 'L1kZbhG2Ou',
    password: 'BH8r2ZAZ0g',
    database: 'L1kZbhG2Ou'
  };
  
var con;

function handleDisconnect()
{
	con = mysql.createConnection(sqlInfo);

	con.connect(function(err)
	{
        if(err)
        {
            console.log('Error connecting to Db');
            console.log(err);
            return;
        }
        console.log('Connection established');
	});

	con.on('error', function(err) {
		console.log('db error 1', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') // Connection to the MySQL server is usually -D9_I6MTa+6uoW6jpa
		{											// lost due to either server restart, or a
		  handleDisconnect();                       // connnection idle timeout (the wait_timeout
		}
        else
        {                                    // server variable configures this)
		  console.log('db error 2', err);
		}
	});
}

handleDisconnect();

// ------------------------------------------------------------------------------------------------------------------------------------------

app.post('/validate_user',function(req,res)
{
    console.log(req.body);

    var username = req.body.username;
    var password = req.body.password;

    var query_string = 'SELECT * FROM login WHERE user_name = "'+username+'"';

    con.query(query_string,function(err,rows)
	{
		if(err)
		{
			console.log(err);
			res.sendStatus(500);
		}
		else
		{
            console.log(rows);

            if (rows.length > 0)
            {
                if (rows[0].password == password)
                {
                    res.sendStatus(200);
                }
                else
                {
                    res.send('Password did not match.');
                }
            }
            else
            {
                res.send('User does not exist.');
            }
		}
	});
});

// ------------------------------------------------------------------------------------------------------------------------------------------

app.listen(PORT, console.log(`Server is starting at ${PORT}`));