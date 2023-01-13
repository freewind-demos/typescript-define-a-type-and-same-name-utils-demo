// 'interface User' has the same effect
export type User = {
    name: string;
    email: string;
}

export const User = {
    print: (user: User) => {
        console.log("### user", JSON.stringify(user))
    }
}