const skills = [
    {id: 1, skill: 'CSS'},
    {id: 2, skill: 'Javascript'},
    {id: 3, skill: 'HTML'},
    {id: 4, skill: 'Express'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    update,
};

function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id == id);
}

function create(skill) {
    skill.id = skills.length+1;
    skills.push(skill);
}

function deleteSkill(id){
    const idx = skills.findIndex(skill => skill.id ==id);
    skills.splice(idx,1)
}

function update(id, skill){
    const idx = skills.findIndex(skill => skill.id ==id);
    skills[idx].skill = skill.skill;

}