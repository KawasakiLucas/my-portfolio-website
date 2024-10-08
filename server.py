from flask import Flask, render_template

app = Flask(__name__)

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

# Route for Contact Page
@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)
