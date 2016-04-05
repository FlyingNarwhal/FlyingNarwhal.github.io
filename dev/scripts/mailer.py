#!/usr/bin/python 
print "Content-type: text/html\n"
print

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
        # r += "<p>"+ variable +", "+ value +"</p>\n" 
        # fields = "<p>"+ str(r) +"</p>"
        data[variable] = value
        print data

from email.mime.text import MIMEText

msg = MIMEText("New contact from %s  %s \n Message: \n %s" % (unicode(data['SenderName']), unicode(data['SenderEmail']), unicode(data['Body'])))
msg['Subject'] = data['Subject']
msg['From']    = "contact@joedahle.me"
msg['To']      = 'joe.dahle@gmail.com'

confMsg = MIMEText("complete later")
confMsg['Subject'] = "Thank you"
confMsg['From']    = "contact@joedahle.me"
confMsg['To']      = data['SenderEmail']

s = smtplib.SMTP('smtp.mailgun.org', 587)

s.login('postmaster@mg.joedahle.me', '75e0d29fb3beb8016e357bdcf09e2585')
s.sendmail(msg['From'], msg['To'], msg.as_string())
s.sendmail(confMsg['From'], confMsg['To'], confMsg.as_string())
s.quit()