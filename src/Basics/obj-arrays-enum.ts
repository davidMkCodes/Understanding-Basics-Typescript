
enum Role{ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'david',
    age: 24,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

console.log(person.role);