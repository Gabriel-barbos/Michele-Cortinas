export default function ImageFileInput(props) {
    return (
        <input
          type="file"
          accept="image/*"
          multiple 
          onChange={(e) => {

            const fileList = e.target.files;
            if (fileList) {
              const files = [...fileList];
              onFilesChange(files);
            }
          }}
          className="bg-gray-100"
        />
      );
}