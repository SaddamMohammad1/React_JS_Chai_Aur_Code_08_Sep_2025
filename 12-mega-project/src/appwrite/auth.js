import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appWriteUrl) // Your API Endpoint
            .setProject(conf.appWriteProjectId); // Your project ID

        this.account = new Account(this.Client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method to login
                return this.login({email, password});
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    // Login Credential:
    // email - sadddammahmod4@gmail.com
    // password - Saddam@123

    async login({email, password}) {
        try {
            const userAccount = await this.account.createEmailPasswordSession(email, password);
            return userAccount
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            const userAccount = await this.account.get();
            return userAccount
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null // not logged in
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;