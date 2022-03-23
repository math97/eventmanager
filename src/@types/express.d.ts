declare namespace Express {
  export interface Request {
    organizer: {
      id: string,
    },
    user: {
      id: string,
    }
  }
}