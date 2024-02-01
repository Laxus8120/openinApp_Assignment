import SubTaskRepository from '../Repository/subTask_Repository.js';

class SubTaskService{

    constructor(){
        this.subtaskRepository = new SubTaskRepository();
    }

    async create(data){
        try {
             const subTask =  await this.subtaskRepository.create(data);
             return subTask;
        } 
        catch (error){
            console.log("error in service layer of creation of subTask");
            throw error;
        }
    }

    async getAll(task_id){
        try {
            const task = await this.subtaskRepository.getAll(task_id);
            return task;
        } catch (error) {
            console.log("not able to get All subtask")
           throw error; 
        }
    }
}

export default SubTaskService;