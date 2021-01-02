import { useDispatch, useSelector } from 'react-redux';
import {addShop} from '../../store/shops';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// const TextAreaInput = ({ label, ...props }) => {
//   const [field, meta] = useField({props, type: 'textarea'});
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input type="textarea" className="textarea-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };


const CreateShopFormPage = () => {
  const dispatch = useDispatch();
  const currentShop = useSelector(state => state.shops);
  console.log(currentShop)


  return (
    <>
      <h1>Create Shop</h1>
      <Formik
        initialValues={{
          shopName: '',
          makerName: '',
          shopBio: '',
          awsUrl: false
        }}
        validationSchema={Yup.object({
          shopName: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          makerName: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
          shopBio: Yup.string()
            .required('Required'),
          awsUrl: Yup.string()
          .required('Required'),
        })}
        onSubmit={(values) => {
            console.log(values);
            dispatch(addShop(values))
            }
        }
      >
        <Form>
          <TextInput
            label="Shop Name"
            name="shopName"
            type="text"
            placeholder="The Life Aquatic"
          />
          <TextInput
            label="Maker Name(s)"
            name="makerName"
            type="text"
            placeholder="Steve and Eleanor Zissou"
          />
          <TextInput
            label="Shop Bio"
            name="shopBio"
            type="textarea"
            placeholder="Let me tell you about my shop..."
          />
          <TextInput
            label="Avatar"
            name="awsUrl"
            type="text"
            placeholder="http://..../something.png"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateShopFormPage