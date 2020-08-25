import React from "react";
import {Field, reduxForm} from "redux-form";
import Input from "../../../../reusable components/input/Input";
import {Checkbox} from "../../../../reusable components/checkbox/Checkbox";
import classesProfileInfo from "../ProfileInfo.module.css";
import Icon from "../../../../reusable components/icon/Icon";

const ProfileDataForm = ({handleSubmit,myInfo, saveDataProfile,...props}) => {
    return (
        <form onSubmit={handleSubmit}>

            <button><Icon name={'save'}/></button>
            {props.error && <li className={classesProfileInfo.commonError}><span>{props.error}</span></li>}
            <li>
                <h4>Full name</h4>
                <Field id={'fullName'}
                       name={'fullName'}
                       type={'text'}
                       component={Input}
                       validate={[ ]}
                       {...props}
                />
            </li>
            <li>
                <h4>About me</h4>
                <Field id={'aboutMe'}
                             name={'aboutMe'}
                             type={'text'}
                             component={Input}
                             validate={[ ]}
                             {...props}/>
            </li>
            <li>
                <h4>Looking for a job</h4>
                <Field id={'lookingForAJob'}
                       name={'lookingForAJob'}
                       type={'checkbox'}
                       component={Checkbox}
                       validate={[ ]}
                       {...props}/>
            </li>
            <li>
                <h4>Looking for a job description</h4>
                <Field id={'lookingForAJobDescription'}
                       name={'lookingForAJobDescription'}
                       type={'text'}
                       component={Input}
                       validate={[ ]}
                       {...props}/>
            </li>
            <li className={classesProfileInfo.contactsForm}>
                <h4>Contacts</h4>
                {Object.keys(myInfo.contacts).map(key => {
                    return <ContactsForm key={key} contactsTitleFrom={key} contactsValueFrom={myInfo.contacts[key]}/>
                })}
            </li>
        </form>)
};
export const ContactsForm = ({contactsTitleFrom, contactsValueFrom, ...props}) => {
    return(<div className={classesProfileInfo.contacts}>
            <b>{contactsTitleFrom} : </b><Field id={contactsTitleFrom}
                                               name={'contacts.' + contactsTitleFrom}
                                               type={'text'}
                                               component={Input}
                                               validate={[ ]}
                                               {...props}/>
        </div>
    )
}
const ProfileDataFormRedux = reduxForm({
    form: 'Profile Data'
})(ProfileDataForm);
export default ProfileDataFormRedux;