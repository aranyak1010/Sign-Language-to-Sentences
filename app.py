from flask import Flask,render_template,request,session,redirect,url_for,flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash,check_password_hash
from flask_login import login_user,logout_user,login_manager,LoginManager
from flask_login import login_required,current_user
from datetime import datetime
import json


local_server= True
app = Flask(__name__)




@app.route('/')
def index(): 
    return render_template('index.html')

@app.route('/about')
def about(): 
    return render_template('about.html')


@app.route('/animetion')
def animation(): 
    return render_template('animation.html')


@app.route('/index3')
def index3(): 
    return render_template('index3.html')

@app.route('/signup')
def blog(): 
    return render_template('Signup.html')


@app.route('/blog-details')
def blogd(): 
    return render_template('blog-details.html')


@app.route('/team')
def team(): 
    return render_template('team.html')

@app.route('/login')
def portfolio(): 
    return render_template('Login.html')

@app.route('/login-details')
def portfoliod(): 
    return render_template('portfolio-details.html')

@app.route('/services')
def services(): 
    return render_template('services.html')
@app.route('/service-details')
def servicesd(): 
    return render_template('service-details.html')


@app.route('/contact')
def contact(): 
    return render_template('contact.html')



# @app.route('/signup',methods=['POST','GET'])
# def signup():
#     if request.method == "POST":
#         username=request.form.get('username')
#         email=request.form.get('email')
#         password=request.form.get('password')
#         user=User.query.filter_by(email=email).first()
#         if user:
#             flash("Email Already Exist","warning")
#             return render_template('/signup.html')
#         # encpassword=generate_password_hash(password)

#         # new_user=db.engine.execute(f"INSERT INTO `user` (`username`,`email`,`password`) VALUES ('{username}','{email}','{encpassword}')")

#         # this is method 2 to save data in db
#         newuser=User(username=username,email=email,password=password)
#         db.session.add(newuser)
#         db.session.commit()
#         flash("Signup Succes Please Login","success")
#         return render_template('login.html')


#     return render_template('signup.html')

# @app.route('/login',methods=['POST','GET'])
# def login():
#     if request.method == "POST":
#         email=request.form.get('email')
#         password=request.form.get('password')
#         user=User.query.filter_by(email=email).first()

#         # if user and check_password_hash(user.password,password):
#         if user and user.password == password:
#             login_user(user)
#             flash("Login Success","primary")
#             return redirect(url_for('index3'))
#         else:
#             flash("invalid credentials","danger")
#             return render_template('login.html')    

#     return render_template('login.html')

# @app.route('/logout')
# @login_required
# def logout():
#     logout_user()
#     flash("Logout SuccessFul","warning")
#     return redirect(url_for('login'))



@app.route('/addiction')
@login_required
def addiction(): 
    return render_template('addiction.html')


@app.route('/depression')
@login_required
def dipression(): 
    return render_template('depression.html')


@app.route('/anxiety')
@login_required
def anxiety(): 
    return render_template('anxiety.html')


@app.route('/peer')
@login_required
def peer(): 
    return render_template('peer.html')


@app.route('/sleep-cycle')
@login_required
def sleepcycle(): 
    return render_template('sleep-cycle.html')


@app.route('/suicide')
@login_required
def suicide(): 
    return render_template('suicide.html')

# @app.route('/contact',methods=['POST','GET'])
# def contact():
#     query=Feedback.query.all()
#     if request.method=="POST":
#         name=request.form.get('name')
#         email=request.form.get('email')
#         subject=request.form.get('subject')
#         message=request.form.get('message')
#         feed=Feedback(name=name,email=email,subject=subject,message=message)
#         db.session.add(feed)
#         db.session.commit()
#         flash("feedback sent")
#         return redirect(url_for('signup'))

        
#     return render_template('contact.html',query=query)


if __name__== "__main__":
    app.run(debug=True)



