import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import SettingsRepository from '../repositories/SettingsRepository';
import SettingsService from '../services/SettingsService';

export default class SettingsController {
    async create(request: Request, response: Response) {

        const { chat, username } = request.body;

        const settingsService = new SettingsService();
        try{
            const settings = settingsService.create({chat, username});
            return response.json(settings).status(200);
        }catch(err){
            return response.status(400).json(err.message)
        }
    }

    async findByUsername(request: Request, response: Response) {
        const { username }  = request.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUsername(username)

        return response.json(settings)
    }

    async update(request: Request, response: Response) {
        const { username } = request.params;
        const { chat } = request.body

        const settingsService = new SettingsService();
        const settings =await settingsService.update(username, chat)


        return response.json(settings)
    }

}