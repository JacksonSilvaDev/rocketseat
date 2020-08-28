import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Jackson', 
        email: 'jackson@gmail.com', 
        password: 'teste',
        techs: [
            'NodeJs',
            'React',
            'React Native',
            { title: 'sei la o que', experience: 100 }
        ]
    })


    return response.json({message: 'Hello World'}) 
}