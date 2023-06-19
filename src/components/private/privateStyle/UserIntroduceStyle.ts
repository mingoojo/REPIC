import { styled } from 'styled-components';

const ArticleUserInt = styled.article`
width: 62%;
padding-block: 1rem;

h2{
  font-size: 1.5rem;
  font-weight: normal;
  margin-block: 2rem;
}

input, .introduce{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${(props) => props.theme.colors.textMain};
  border: 1px solid ${(props) => props.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 3rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
}
.introduce{
  min-height: 100px;
  resize: none;
}
label{
  position: absolute;
  padding: 2rem 0rem 0rem 1rem;
  color: ${(props) => props.theme.colors.textSecond};
  font-weight: 300;
  font-size: 1.4rem;
  z-index: -1;
}
.buttonField{
  text-align: center;
}
.column{
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 1rem;
  margin-block: 1rem;
  min-height: 100px;
}
div[class='buttonBox']{
  text-align: center;
  margin-top: 2rem;
  button{
    cursor: pointer;
    width: 95%;
    height: 40px;
    border: none;
    border-radius: 1rem;
    box-shadow: 1px 1px 3px ${(props) => props.theme.colors.primaryDeep};;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
  button:active{
    background-color: ${(props) => props.theme.colors.primaryDeep};
  }
}
.stackBox{
  .front, .back, .global{
    /* border: 2px solid #222; */
    height: 50px;
    display: flex;
    align-items: center;
    .stack{
      input{
          display: none;
        }
      input[type='checkbox']:checked + label div{
        box-sizing: border-box;
        border: 1px solid red;
        }
      input[type='checkbox']:checked + label div:before{
        content: '';
        position:absolute;
        z-index: -1;
        width:7px;
        height:7px;
        border-radius: 1rem;
        background-color: red;
        }
      .stackLabel{
        position: static;
        padding: 0;
        display: inline;
        margin: 1rem;
        .react{
          background-image: url('/images/library/resized/react.png');
        }
        .vue{
          background-image: url('/images/library/resized/vue.png');
        }
        .angler{
          background-image: url('/images/library/resized/angler.png');
        }
        .javascript{
          background-image: url('/images/library/resized/javascript.png');
        }
        .typescript{
          background-image: url('/images/library/resized/typescript.png');
        }
        .svelte{
          background-image: url('/images/library/resized/svelte.png');
        }
        .next{
          background-image: url('/images/library/resized/next.png');
        }
        .diango{
          background-image: url('/images/library/resized/diango.png');
        }
        .docker{
          background-image: url('/images/library/resized/docker.png');
        }
        .express{
          background-image: url('/images/library/resized/express.png');
        }
        .java{
          background-image: url('/images/library/resized/java.png');
        }
        .mongodb{
          background-image: url('/images/library/resized/mongodb.png');
        }
        .mysql{
          background-image: url('/images/library/resized/mysql.png');
        }
        .nest{
          background-image: url('/images/library/resized/nest.png');
        }
        .nodejs{
          background-image: url('/images/library/resized/nodejs.png');
        }
        .postgresql{
          background-image: url('/images/library/resized/postgresql.png');
        }
        .spring{
          background-image: url('/images/library/resized/spring.png');
        }
        .github{
          background-image: url('/images/library/resized/github.png');
        }
        .aws{
          background-image: url('/images/library/resized/aws.png');
        }
        div{
          width: 35px;
          height: 35px;
          margin: 0rem .3rem 0rem .3rem;
          /* border: 2px solid #222; */
          border-radius: 2rem;
          background-color: white;
          box-shadow: 1px 1px 1px ${(props) => props.theme.colors.textMain};
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        div:hover{
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 720px) {
  width: 100%;
}
`;

export default ArticleUserInt;
