import styles from './ItemEdit.module.css';

export default function ItemEdit() {
    return (
        // <!-- Create Page (Only for logged-in users) -->
        <section className="edit">
            <div className={styles.form}>
                <h2>Edit Item</h2>
                <form className={styles["edit-form"]}>
                    <input
                        type="text"
                        name="collectionName"
                        placeholder="collectionName"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        rows="10"
                        cols="50"
                    ></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        </section>
    );
}