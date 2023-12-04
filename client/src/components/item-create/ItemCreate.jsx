import { useNavigate } from 'react-router-dom';

import generalStyles from '../../App.module.css';
import styles from './ItemCreate.module.css';

import * as itemService from '../../services/itemsService';
import useForm from '../../hooks/useForm';
import Path from '../../paths';
import convertCollectionName from '../../utils/convertCollectionName';

const createFormKeys = {
    collectionName: 'collectionName',
    name: 'name',
    imageUrl: 'imageUrl',
    description: 'description',
}

export default function ItemCreate() {
    const navigate = useNavigate();

    const createItemSubmitHandler = async (values) => {

        const collectionName = convertCollectionName(values.collectionName);

        try {
            await itemService.create(collectionName, values);

            navigate(Path.Home);
        } catch (err) {
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(createItemSubmitHandler, {
        [createFormKeys.collectionName]: 'Bouquets',
        [createFormKeys.name]: '',
        [createFormKeys.imageUrl]: '',
        [createFormKeys.description]: '',

    });

    return (
        <section className={styles.create}>
            <div className={generalStyles.form}>
                <h2>Create Item</h2>
                <form onSubmit={onSubmit}>
                    <select
                        name={createFormKeys.collectionName}
                        value={values[createFormKeys.collectionName]}
                        onChange={onChange}
                    >
                        <option value="Bouquets">Bouquets</option>
                        <option value="Decorations">Decorations</option>
                        <option value="Gift Boxes">Gift Boxes</option> 
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={values[createFormKeys.name]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={values[createFormKeys.imageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        value={values[createFormKeys.description]}
                        onChange={onChange}
                    ></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>
    );
}