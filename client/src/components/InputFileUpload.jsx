import { useState } from 'react';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function InputFileUpload({handler, loading, loaded}) {
  return (
    <LoadingButton component="label" loading={loading} loaded={loaded} loadingIndicator="Enviando imagens…" color={!loaded ? "secondary" : "success"} variant="outlined" startIcon={<CloudUploadIcon />} onChange={(e) => {handler(e)}}>
      {!loaded ? "Carregar imagens" : "Arquivos carregados"}
      <VisuallyHiddenInput type="file" multiple />
    </LoadingButton>
  );
}