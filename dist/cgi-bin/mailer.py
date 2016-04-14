#!/usr/bin/python 
print("Content-type: text/html\r\n")
print("\r\n")

import cgi
import cgitb 
cgitb.enable()

import smtplib

from email.mime.text import MIMEText

form = cgi.FieldStorage()

variable = ""
value = ""
r = ""
data = {}
for key in form.keys():
        variable = str(key)
        value = str(form.getvalue(variable))
        r += "<p>"+ variable +", "+ value +"</p>\n" 
        fields = "<p>"+ str(r) +"</p>"
        data[variable] = value

msg = MIMEText("New contact from {0}  {1} \n Message: \n {2}".format(unicode(data['SenderName']), unicode(data['SenderEmail']), unicode(data['Body'])))
msg['Subject'] = "personal inquiry"
msg['From']    = "contact@joedahle.me"
msg['To']      = 'joe.dahle@gmail.com'

confMsg = MIMEText("Thank you for contacting me, I'll try to get back to you as soon as possible. \n\n Joe")
confMsg['Subject'] = "Thank you"
confMsg['From']    = "contact@joedahle.me"
confMsg['To']      = data['SenderEmail']

s = smtplib.SMTP('smtp.mailgun.org', 587)

s.login('postmaster@mg.joedahle.me', '75e0d29fb3beb8016e357bdcf09e2585')
s.sendmail(msg['From'], msg['To'], msg.as_string())
s.sendmail(confMsg['From'], confMsg['To'], confMsg.as_string())
s.quit()

print """
	<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="refresh" content="5; url=https://joedahle.me/">
		<title>Thank you</title>
	</head>
	<body>
		<div class="mailer-header">
			<h1>Thank you</h1>
			<p>Just a sec while the server tidys up a bit...</p>
		</div>
	</body>
"""