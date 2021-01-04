import { useDispatch, useSelector } from 'react-redux';
import {addShop} from '../../store/shops';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './createshop.css';
import "../Continents/continents.css";

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


const CreateShopFormPage = () => {
  const dispatch = useDispatch();
  const currentShop = useSelector(state => state.shops);
  const userId = useSelector(state => state.session.user.id)
  console.log(currentShop)

  return (
    <div className="create-shop">
      <h1>Create Shop</h1>
      <Formik
        initialValues={{
          userId: userId,
          shopName: '',
          makerName: '',
          shopBio: '',
          awsUrl: '',
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
          /><br/>
          <TextInput
            label="Maker Name(s)"
            name="makerName"
            type="text"
            placeholder="Steve and Eleanor Zissou"
          /><br/>
          <TextInput
            label="Shop Bio"
            name="shopBio"
            type="textarea"
            placeholder="Let me tell you about my shop..."
          /><br/>
          {/*needs to be texarea, tried to use textinput as basis, didn't work, had to move on */}
          <TextInput
            label="Avatar"
            name="awsUrl"
            type="text"
            placeholder="http://..../something.png"
          /><br/>
          {/*will convert to S3 bucket upload*/}}
          <button type="submit">Submit</button>
          {/*needs to clear form and redirect to admin*/}
        </Form>
      </Formik>
    </div>
  );
};

export default CreateShopFormPage