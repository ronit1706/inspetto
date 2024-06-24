import os
import cv2
import albumentations as A
import matplotlib.pyplot as plt

transform = A.Compose([
    A.RandomCrop(width=150, height=150),
    A.HorizontalFlip(p=0.8),
    A.RandomBrightnessContrast(p=0.8),
])



output_dir = "./Crazing/Crazing_Augmented"
os.makedirs(output_dir, exist_ok=True)



for i in range(2, 300):
    img = cv2.imread(f"./Crazing/Cr_{i}.bmp")
    if img is None:
        print(f"Image ./Crazing/Cr_{i}.bmp not found.")
        continue
    else:    
        image = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)    
        transformed = transform(image = image)
        transformed_image = transformed["image"]
        transformed_image_bgr = cv2.cvtColor(transformed_image, cv2.COLOR_RGB2BGR)
        img_normalized = cv2.normalize(transformed_image_bgr, None, 0, 1.0,cv2.NORM_MINMAX, dtype=cv2.CV_32F)
        #print("Image data after Normalize:\n", img_normalized)
        #This is to display the image ~ 
        # plt.imshow(transformed_image_bgr)
        # plt.axis('off') 
        # plt.show()

    output_path = os.path.join(output_dir, f"transformed_Cr_{i}.bmp")

    status = cv2.imwrite(output_path, transformed_image_bgr)
    if status:
        print(f"Transformed image saved to {output_path}")
    else:
        print(f"Failed to save transformed image to {output_path}")



 #############################################################################################################################################

output_dir = "./Inclusion/Inclusion_Augmented"
os.makedirs(output_dir, exist_ok=True)



for i in range(2, 300):
    img = cv2.imread(f"./Inclusion/In_{i}.bmp")
    if img is None:
        print(f"Image ./Inclusion/In_{i}.bmp not found.")
        continue
    else:    
        image = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)    
        transformed = transform(image = image)
        transformed_image = transformed["image"]
        transformed_image_bgr = cv2.cvtColor(transformed_image, cv2.COLOR_RGB2BGR)
        img_normalized = cv2.normalize(transformed_image_bgr, None, 0, 1.0,cv2.NORM_MINMAX, dtype=cv2.CV_32F)
        #print("Image data after Normalize:\n", img_normalized)
        #This is to display the image ~ 
        # plt.imshow(transformed_image_bgr)
        # plt.axis('off') 
        # plt.show()

    output_path = os.path.join(output_dir, f"transformed_Cr_{i}.bmp")

    status = cv2.imwrite(output_path, transformed_image_bgr)
    if status:
        print(f"Transformed image saved to {output_path}")
    else:
        print(f"Failed to save transformed image to {output_path}")

#############################################################################################################################################


output_dir = "./Patches/Patches_Augmented"
os.makedirs(output_dir, exist_ok=True)



for i in range(2, 300):
    img = cv2.imread(f"./Patches/Pa_{i}.bmp")
    if img is None:
        print(f"Image ./Patches/Pa_{i}.bmp not found.")
        continue
    else:    
        image = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)    
        transformed = transform(image = image)
        transformed_image = transformed["image"]
        transformed_image_bgr = cv2.cvtColor(transformed_image, cv2.COLOR_RGB2BGR)
        img_normalized = cv2.normalize(transformed_image_bgr, None, 0, 1.0,cv2.NORM_MINMAX, dtype=cv2.CV_32F)
        #print("Image data after Normalize:\n", img_normalized)
        #This is to display the image ~ 
        # plt.imshow(transformed_image_bgr)
        # plt.axis('off') 
        # plt.show()

    output_path = os.path.join(output_dir, f"transformed_Pa_{i}.bmp")

    status = cv2.imwrite(output_path, transformed_image_bgr)
    if status:
        print(f"Transformed image saved to {output_path}")
    else:
        print(f"Failed to save transformed image to {output_path}")