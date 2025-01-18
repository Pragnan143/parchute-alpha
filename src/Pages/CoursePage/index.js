import React from 'react'
import CourseCard from '../../Components/CourseCard/index'
import fullstack from './Assets/Fullstack.webp';
import datascience from './Assets/datascience.webp'
import dataanalytics from './Assets/dataanalytics.webp'
import mlds from './Assets/ml&ds.webp'
import dsa from './Assets/dsa.webp'
import devops from './Assets/devops.webp'
import salesforce from './Assets/salesforce.webp'
import aws from './Assets/aws.webp'
import tensorflow from './Assets/tensorflow.webp'
import mongodb from './Assets/mongodb.webp'
import testing from './Assets/testing.webp'
import c from './Assets/c.webp'
import cplus from './Assets/c++.webp'
import java from './Assets/java.webp'
import android from './Assets/android.webp'

const index = () => {
   const courses = [
        {
            id:1,
            image:fullstack,
            courseName:'Full Stack',
            courseContent:'Pursuit Future presents for the first time ever: Online Classroom Program on Full Stack Development. You will learn to build dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js - in Online classes and in an interactive manner. So join the classes today to become a MERN Stack Developer!',
            courseButton:'Enroll'
        },

        {
            id:2,
            image:datascience,
            courseName:'Data Science',
            courseContent:'Unlock the world of data science with our Data Science Certification Training Program. Explore ML, Python, Advanced Analytics, NLP, LLM, GenAI its application in modern AI, and much more in this comprehensive course',
            courseButton:'Enroll'
        },

        {
            id:3,
            image:dataanalytics,
            courseName:'Data Analystics',
            courseContent:'Unlock the world of data science with our Data Science Certification Training Program. Explore ML, Python, Advanced Analytics, NLP, LLM, GenAI its application in modern AI, and much more in this comprehensive course',
            courseButton:'Enroll'
        },

        {
            id:4,
            image:mlds,
            courseName:'Ml & Ds',
            courseContent:'The Complete Machine Learning & Data Science Program is a comprehensive live course designed to take you from beginner to expert in machine learning and data science. Explore a 360-degree learning experience designed for geeks who wish to get hands-on Data Science and ML.',
            courseButton:'Enroll'
        },

        {
            id:5,
            image:dsa,
            courseName:'Data Structures and Algorithms - Self Paced',
            courseContent:'Most popular course on DSA trusted by over 1,00,000+ students! Built with years of experience by industry experts the course gives you a complete package of video lectures, practice problems, quizzes, discussion forums, and contests. Enrol now to learn and master DSA skills!',
            courseButton:'Enroll'
        },

        {
            id:6,
            image:devops,
            courseName:'DevOps Engineering - Planning to Production',
            courseContent:'Get ready to revolutionize your process & take your career to the next level with this DevOps - Live course! Gain insights from industry experts on how to make your workflow more efficient & improve the ability to quickly release high-quality software.',
            courseButton:'Enroll'
        },

        {
            id:7,
            image:salesforce,
            courseName:'Salesforce Certified Administrator Online Course',
            courseContent:'Become a Salesforce administrator with our comprehensive Salesforce Certified Administrator course. Learn to manage users, customize the platform, and automate processes. You will also learn to establish a secure Salesforce environment, maintain and import clean data',
            courseButton:'Enroll'
        },

        {
            id:8,
            image:aws,
            courseName:'AWS Certified Cloud Practitioner Exam [Certification Course]',
            courseContent:'Embark on a transformative journey into cloud computing with our AWS Cloud Practitioner Course. Master the essentials of AWS from foundational concepts to security, stability & networking. Enroll now for expert-led training & hands-on labs.',
            courseButton:'Enroll'
        },

        {
            id:9,
            image:tensorflow,
            courseName:'Complete TensorFlow Course',
            courseContent:'Step into the future of artificial intelligence with our TensorFlow Certification Course. Designed for aspiring and experienced developers alike, this TensorFlow course delivers a thorough understanding of TensorFlow core functions and its application in real-world scenarios.',
            courseButton:'Enroll'
        },

        {
            id:10,
            image:mongodb,
            courseName:'MongoDB Developers Toolkit',
            courseContent:'Embark on a thrilling journey with our FREE COURSE, powered by MongoDB! Unleash your potential and master database management effortlessly across Node.js, Python, Java, and C#, MongoDBs developer data platform integrates all of the data services you need to build modern applications.',
            courseButton:'Enroll'
        },

        {
            id:11,
            image:testing,
            courseName:'Complete Software Testing Course - Beginner to Advance',
            courseContent:'The Complete Software Testing Course - Beginner to Advance is designed to teach you everything you need to know about software testing, from the basics to advanced techniques. You will learn manual testing, automated testing, QA processes.',
            courseButton:'Enroll'
        },

        {
            id:12,
            image:c,
            courseName:'C Programming Course Online',
            courseContent:'Learn C Programming Language from the best mentor of all time - Sandeep Jain! This C Programming with Data Structures Course will help you master all basic and advanced C concepts. Master the easy-to-learn C language and take your skills to the next level. Start Today!',
            courseButton:'Enroll'
        },

        {
            id:13,
            image:cplus,
            courseName:'C++ Programming Course Online',
            courseContent:'Become an ace in C++ Programming Language and master the C++ programming skills from basics to advanced. This online C++ course is a complete package of videos, notes & contests from basics to STL libraries & algorithms. This CPP course is perfect for beginners as well as professionals.',
            courseButton:'Enroll'
        },

        {
            id:14,
            image:java,
            courseName:'Java Programming Online Course',
            courseContent:'This comprehensive Java Programming Course covers everything from Java basics, control structures, functions, classes, objects to advanced concepts in Java including Java Collections, Algorithms, etc. Whether you are a complete Java beginner or looking to enhance your Java programming skills.',
            courseButton:'Enroll'
        },

        {
            id:15,
            image:android,
            courseName:'Android Mastery with Kotlin',
            courseContent:'GeeksforGeeks presents a Live course on Android Development with Kotlin! Over 8 weeks, this immersive course offers a perfect blend of theory and hands-on practice, equipping you to build robust, feature-rich Android apps using Kotlin Googles preferred language for Android development',
            courseButton:'Enroll'
        },
        
    ]

  return (
    <div>
        <CourseCard courses={courses}/>
    </div>
  )
}

export default index