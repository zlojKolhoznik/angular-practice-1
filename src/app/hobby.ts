export class Hobby {
    title: string;
    description: string;
    examplePicture: string;
    personPicture: string;

    constructor(title: string, description: string, examplePicture: string, personPicture: string) {
        this.title = title;
        this.description = description;
        this.examplePicture = examplePicture;
        this.personPicture = personPicture;
    }
}