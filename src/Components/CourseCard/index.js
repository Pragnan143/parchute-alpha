import React from 'react';

const Index = (props) => {
    const courses=props.courses
console.log(courses)
    return (
        <section className="py-10">
            <p className="text-2xl font-bold text-center mb-8 font-bold text-4xl text-purple-500">All Courses</p>
            <div className="flex flex-wrap h-full w-screen auto justify-evenly items-center gap-6"> {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="w-[450px] bg-white shadow-lg rounded-lg overflow-hidden "
                    >
                        <div className="w-full h-48">
                            <img
                                src={course.image}
                                alt="course"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold mb-2">{course.courseName}</p>
                            <p className="text-sm text-gray-600 mb-4">{course.courseContent}</p>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                                {course.courseButton}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Index;
