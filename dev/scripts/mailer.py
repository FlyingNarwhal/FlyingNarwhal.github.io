#!/usr/bin/python 

import smtplib
import json
import sys

from email.mime.text import MIMEText

# save our JSON data from the email form as a 
# python dictionary

# data = json.load(sys.stdin)
data = {"SenderName": "joe",
 "Subject": "test",
 "Body": "testing",
 "SenderEmail": "joe.dahle@gmail.com"}

## variables for the contact email
# Message body
msg = MIMEText(data['SenderName'] + data['Body'])
# Message subject
msg['Subject'] = data['Subject']
# Mailgun Sending domain
msg['From']    = 'contact@joedahle.me'
# recipient or ME
msg['To']      = 'joe@joedahle.me'
# Mailgun server and port
s = smtplib.SMTP('smtp.mailgun.org', 587)

## variables for the confirmation email
# Message body
confMsg = MIMEText('Thank you %s for reaching out to me, I\'ll try to get back to you as soon as possible.', data['SenderName'])
# Message subject
confMsg['Subject'] = 'Thank you'
# Recipient or initiator
confMsg['To'] = data['SenderEmail']

#mailgun login
s.login('postmaster@mg.joedahle.me', '75e0d29fb3beb8016e357bdcf09e2585')
s.sendmail(msg['From'], msg['To'], msg.as_string())
s.sendmail(msg['From'], confMsg['To'], confMsg.as_string())
s.quit()