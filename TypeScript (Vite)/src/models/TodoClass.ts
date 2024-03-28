// ! Working with TypeScript in classes, if your class has different properties, attributes, which you want to add then you dont have to do this in the constructor
// Todo: As you do it in Vanilla JavaScript (Yeniki TypeScript class-la isleyerken elave attribut elave etsen bunu constructore mutleq elave etmeye ehtiyac yoxdur)

class TodoClass {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.id = crypto.randomUUID();
        this.text = todoText;
    }
}

export default TodoClass;