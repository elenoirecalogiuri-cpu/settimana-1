export function updateUserCity (state, id, city) {
    const newUsers = state.users.map((user) => {
        if (user.id === id) {
            return {
                ...user,
                address: {... user.address, city: city},
            };
        }
        return user;
    })
return {... state, users: newUsers};
}