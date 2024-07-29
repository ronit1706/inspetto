import numpy as np
from flask import Flask, request, jsonify
import tensorflow as tf
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model_path = "/Users/akshatsharma/Developer/IBM/Inspetto/server/VGG model.h5"


def load_model(model_path):
    model = tf.keras.models.load_model(model_path)
    return model


def preprocess_image(image):
    image = image.resize((200, 200))
    image = np.array(image)
    if image.ndim == 2:  # If image is grayscale
        image = np.stack((image,) * 3, axis=-1)
    elif image.shape[-1] == 4:  # If image has an alpha channel, remove it
        image = image[..., :3]
    image = image.astype('float32') / 255.0
    image = np.expand_dims(image, axis=0)
    return image


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'GET':
        # Handle GET request
        return jsonify({'message': 'This is a GET request'})
    elif request.method == 'POST':
        try:
            if 'image' not in request.files:
                return jsonify({'error': 'No image provided'})

            model = load_model(model_path)

            img_file = request.files['image']
            if img_file.filename == '':
                return jsonify({'error': 'No image provided'})

            img = Image.open(img_file)
            processed_image = preprocess_image(img)

            predictions = model.predict(processed_image)
            predicted_class = np.argmax(predictions, axis=1)[0]
            class_dict = {0: "Crazing", 1: "Inclusion", 2: "Patches", 3: "Pitted", 4: "Rolled", 5: "Scratches"}
            predicted_class_name = class_dict[predicted_class]

            return jsonify({'Prediction': predicted_class_name})
        except Exception as e:
            return jsonify({'error': str(e)})