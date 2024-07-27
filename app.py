import streamlit as st
import tensorflow as tf
from PIL import Image
import numpy as np

@st.cache_resource
def load_model(model_path):
    model = tf.keras.models.load_model(model_path)
    return model

def preprocess_image(image):
    image = image.resize((200, 200))
    image = np.array(image)
    if image.ndim == 2:  # If image is grayscale
        image = np.stack((image,)*3, axis=-1)
    elif image.shape[-1] == 4:  # If image has an alpha channel, remove it
        image = image[..., :3]
    image = image.astype('float32') / 255.0
    image = np.expand_dims(image, axis=0)
    return image

def main():
    st.title("Automated Quality Control System")

    model_options = {
        "Custom Sequential (94%)": "D:\\Projects\\ibm\\models\\custom_model_final.h5",
        "Inception Model (97%)": "D:\\Projects\\ibm\\models\\inception_model.h5",
        "VGG Model (99%)": "D:\\Projects\\ibm\\models\\vgg_model.h5"
    }

    model_choice = st.selectbox("Choose a model", list(model_options.keys()))
    model_path = model_options[model_choice]

    model = load_model(model_path)

    uploaded_file = st.file_uploader("Choose an image...", type=["bmp"])

    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        st.image(image, caption='Uploaded Image.', use_column_width=True)

        processed_image = preprocess_image(image)

        predictions = model.predict(processed_image)
        st.write("Predictions:", predictions)

        predicted_class = np.argmax(predictions, axis=1)[0]
        class_dict = {0: "Crazing", 1: "Inclusion", 2: "Patches", 3: "Pitted", 4: "Rolled", 5: "Scratches"}
        predicted_class_name = class_dict[predicted_class]
        st.write("Predicted Class:", predicted_class_name)

if __name__ == "__main__":
    main()
