type DocumentProps = {
  id : string
  text : string
  title : string
  uid : string
  createdTime : {
    seconds : number
    nanoseconds : number
  }
}

export default DocumentProps;
