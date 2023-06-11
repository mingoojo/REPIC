export type DocumentProps = {
  id : string
  text : string
  title : string
  uid : string
  createdTime : {
    seconds : number
    nanoseconds : number
  }
}

export type CreatedTime = {
  seconds : number,
  nanoseconds : number
}

export const defaultCommnets = {
  uid: '',
  likes: 0,
  text: '',
};

export type Comment = {
  uid : string
  text : string
  likes : number
  createdTime : CreatedTime
}

export type CommunityDocument = {
  comments : Comment[]
  createdTime : CreatedTime
  id : string
  likes : string[]
  text : string
  title : string
  uid: string
}
