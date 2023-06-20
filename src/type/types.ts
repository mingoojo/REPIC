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
  likes : string[]
  createdTime : CreatedTime
}

export type CommunityItem = {
  comments : Comment[]
  createdTime : CreatedTime
  id : string
  likes : string[]
  text : string
  title : string
  uid: string
  view : number[]
}

export type fetchUpdateCommunityProp<T> = {
  tranaction:string,
  docId:string,
  updateKey:string,
  updateValue:T
}

export type Column = {
  title : string,
  text : string,
  createdTime : CreatedTime
}

export type UserUpdate = {
  nickName: string,
  intro: string
}

export type PrivateData = {
  id : string
  uid : string,
  email : string,
  nickName : string[],
  introduce : string[],
  column: Column[],
  stacks: string[]
}

export type ProjectItem = {
  createdTime : CreatedTime,
  likes : string[],
  stacks : string[],
  text : string,
  timeline: string[],
  title : string,
  uid : string,
  view : number[],
  id:string
}

export const nullPrivateData = {
  id: '',
  uid: '',
  email: '',
  nickName: [''],
  introduce: [''],
  column: [
    {
      title: '',
      text: '',
      createdTime: {
        seconds: 0,
        nanoseconds: 0,
      },
    },
  ],
  stacks: [''],

};
