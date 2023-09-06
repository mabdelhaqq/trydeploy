import { useState } from 'react';
import './AddNewPost.scss';
import { Formik, Form, Field } from 'formik';
import { Dropdown } from 'primereact/dropdown';
import * as Yup from 'yup';
import { dataAPI } from './data-api';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../helpers/app-store';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const countries = [
  { label: 'Palestine', value: 'Palestine' },
  { label: 'Tunisia', value: 'Tunisia' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'China', value: 'China' },
  { label: 'France', value: 'France' },
  { label: 'Russia', value: 'Russia' },
  { label: 'Portugal', value: 'Portugal' },
  { label: 'Venezuela', value: 'Venezuela' },
  { label: 'Poland', value: 'Poland' }
];
const languages = [
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Indonesian', value: 'Indonesian' },
  { label: 'Italian', value: 'Italian' },
  { label: 'Engilsh', value: 'English' },
  { label: 'Kazakh', value: 'Kazakh' },
  { label: 'Dhivehi', value: 'Dhivehi' },
  { label: 'Malagasy', value: 'Malagasy' },
  { label: 'Zulu', value: 'Zulu' },
  { label: 'Tajik', value: 'Tajik' },
  { label: 'Azeri', value: 'Azeri' }
];

const AddNewPost = () => {
  const { username } = useAppContext();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [language, setLanguage] = useState();

  const initialValues = {
    title: '',
    country: '',
    language: '',
    verified: false,
    body: '',
    img: 'http://dummyimage.com/217x100.png/ff4444/ffffff'
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(5, 'Title must be at least 5 characters')
  });
  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const now = new Date().toISOString();
    const randomId = Math.floor(Math.random() * 900) + 101;
    const newPost = {
      hashtags: values.title,
      country: country,
      language: language,
      is_verified: values.verified,
      body: values.body,
      likes: 0,
      comments: 0,
      shares: 0,
      user_name: username,
      user_avatar: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d',
      user_id: randomId,
      image_url: values.img,
      timestamp: now
    };
    setSubmitting(true);
    try {
      await dataAPI.addPost(newPost);
      navigate('/posts');
    } catch (error) {
      console.error('Error : ', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="create-post-container">
      <div className="header-new">
        <h2>Create a New Post</h2>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          className="left"
          onClick={() => {
            navigate('/posts');
          }}
        />
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <Field type="text" id="body" name="body" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Dropdown
                inputId="country"
                name="country"
                value={country}
                options={countries}
                optionLabel="label"
                optionValue="value"
                placeholder="Choose your country"
                onChange={(e) => setCountry(e.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <Dropdown
                inputId="language"
                name="language"
                value={language}
                options={languages}
                optionLabel="label"
                optionValue="value"
                placeholder="Choose your language"
                onChange={(e) => setLanguage(e.value)}
              />
            </div>
            <div className="form-group-check">
              <label htmlFor="ver">Verified</label>
              <Field id="ver" type="checkbox" name="verified" />
            </div>
            <div className="form-group">
              <button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Post'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewPost;
