# TensorflowJS quick exemple.

#### For run:
1. download Model
    ```bash
    wget https://nomeroff.net.ua/models/imagenet_vgg16_np_region_2019_1_18.h5
    ```
2. converting .h5 model to json use [tfjs-converter](https://github.com/tensorflow/tfjs-converter):
    ```bash
    pip install tensorflowjs;
    tensorflowjs_converter --input_format=keras \
        /tmp/imagenet_vgg16_np_squire_2019_1_24.h5 \
        /var/www/neurojs/public/data/model;
    ``` 
3. run web server 
    ```bash
    node server.js
    ```
4. open public/index.html in your browser 

