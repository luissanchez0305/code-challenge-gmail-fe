
export const emailReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EMAILS':
            return [...action.emails];
        case 'ADD_EMAIL':

            return [...state, {
                starred: true,
                from: action.email.from,
                subject: action.email.subject,
                message: action.email.message,
                received: Date.now(),
                read: true,
                id: Date.now()
            }];
        case 'REMOVE_EMAIL':
            return state.filter(email => email.id !== action.id);
        case 'EDIT_EMAIL':
            const emailIndex = state.findIndex(email => email.id !== action.id);
            const newArray = [...state]
            newArray[emailIndex].read = action.read
            newArray[emailIndex].starred = action.starred
            
            return [...newArray]
        default:
            return state;
    }
}