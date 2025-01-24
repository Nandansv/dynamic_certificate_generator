# Certificate Generator for Blockchain Workshop

This project is a dynamic certificate generator built using Node.js. It allows you to generate personalized certificates for students participating in a Blockchain workshop titled "Hash It Out: Demystifying Decentralized Systems" held at RGMCET College, Nandyal.

## Features
- Automatically populates student names on a professional certificate template.
- Adds details like workshop title, location, and date.
- Saves generated certificates as PNG files.

## Prerequisites
1. **Node.js**: Ensure Node.js is installed on your system.
2. **Template Image**: A certificate template image (e.g., `templates/certificate-template.png`) should be placed in the root directory of the project.

## Installation
1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd dynamic_certificate_generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### 1. Running the Script
You can generate certificates by running the `generate` npm script and passing student names as arguments.

```bash
npm run generate -- "Student Name 1" "Student Name 2" "Student Name 3"
```

### 2. Arguments
- Replace `"Student Name 1"`, `"Student Name 2"`, etc., with the names of students for whom you want to generate certificates.
- Multiple names can be passed separated by spaces.

### 3. Output
- Certificates will be saved in the `certificates` folder.
- File names will be based on the student names (e.g., `Student_Name_1.png`).

## Scripts
### `generate`
This script runs the certificate generation script (`index.js`) with the provided arguments.

```json
"scripts": {
  "generate": "node index.js"
}
```

### Example
To generate certificates for three students:
```bash
npm run generate -- "Alice" "Bob" "Charlie"
```

## File Structure
```
dynamic_certificate_generator/
├── certificates/               # Output folder for generated certificates
├── templates/certificate-template.png    # Certificate template image
├── index.js    # Main script for certificate generation
├── package.json                # Project configuration
└── README.md                   # Documentation
```

## Dependencies
- **canvas**: Used to draw on and manipulate images. Install it using:
  ```bash
  npm install canvas
  ```

## Notes
- Ensure the `templates/certificate-template.png` file is designed with placeholders for dynamic text (e.g., student names, workshop title).
- The script uses a default font and layout for text placement. Customize it in `index.js` if needed.

## License
This project is open-source and available under the MIT License.

