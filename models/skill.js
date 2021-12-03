const skills = [
    {id: 1, skill: 'CSS'},
    {id: 2, skill: 'Javascript'},
    {id: 3, skill: 'HTML'},
    {id: 4, skill: 'Express'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id == id);
}