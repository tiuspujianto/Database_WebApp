var db = 
[  { taskName: 'Task1', taskDue: '08/08/2018', taskDesc: 'iii' } ,
{ taskName: 'Moodle', taskDue: '01/08/2018', taskDesc: 'abc' }
 ]

var sortedDb = db.sort(function(task1,task2){
    return Date(task1.taskDue) - Date(task2.taskDue)
});
console.log(sortedDb);