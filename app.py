from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = os.environ.get('EMAIL_SERVER')
app.config['MAIL_PORT'] = 587  # For TLS
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
app.config['MAIL_DEFAULT_SENDER'] = ('Your Name', os.environ.get('EMAIL_USER'))

mail = Mail(app)

# Route for Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Route for About Page
@app.route('/about')
def about():
    return render_template('about.html')

# Route for Portfolio Page
@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['user_name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['text']

        msg = Message(subject, recipients=[email])
        msg.body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        try:
            mail.send(msg)
            flash('Email sent successfully!', 'success')
        except Exception as e:
            flash(f'An error occurred: {str(e)}', 'danger')

        return redirect(url_for('contact'))

    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
