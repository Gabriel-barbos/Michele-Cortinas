import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const ImageItem = (props) => {
    return (
        <div className="image-item" style={{backgroundImage: `url(${props.src})`}}>
            <span className="delete-image-icon" onClick={props.handle}>
                <DeleteOutlineIcon />
            </span>
        </div>
    )
}

export default ImageItem;