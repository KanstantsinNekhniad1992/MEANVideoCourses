var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    title: {type: String, require: '{PATH} is required!'},
    featured: {type: Boolean, required: '{PATH} is required!'},
    published: {type: Date, required: '{PATH} is required!'},
    tags: [String]
});

var Course = mongoose.model('Course', CourseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: 'C#', featured:true, published: new Date('1/1/2013')});
            Course.create({title: 'ASP.NET', featured:true, published: new Date('12/9/2009')});
            Course.create({title: 'Js', featured:true, published: new Date('3/12/2010')});
            Course.create({title: 'Java', featured:false, published: new Date('5/30/2009')});
            Course.create({title: 'Patterns', featured:true, published: new Date('4/12/2011')});
            Course.create({title: 'GitHub', featured:false, published: new Date('7/21/2012')});
            Course.create({title: 'NodeJS', featured:false, published: new Date('3/22/2010')});
            Course.create({title: 'C++', featured:true, published: new Date('5/12/2014')});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;