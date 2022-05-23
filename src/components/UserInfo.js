export class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._nameElement = document.querySelector(nameSelector),
        this._jobSelector = document.querySelector(jobSelector)
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameElement.textContent,
            info: this._jobSelector.textContent
        };
        console.log(userInfo)
        return userInfo;
    }
    
    setUserInfo(item) {
        this._nameElement.textContent = item.name;
        this._jobSelector.textContent = item.info;
    }
}