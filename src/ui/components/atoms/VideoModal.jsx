import CloseIcon from '@mui/icons-material/Close';

export default function VideoModal({ open, setOpen, videoId }) {
  return (
    <>
      {open ? (
        <>
          <div
            onClick={() => setOpen(false)}
            className="video-modal-wrapper fixed inset-0 z-50 flex items-center justify-center overflow-hidden outline-none focus:outline-none"
          >
            <div className="relative mx-auto my-6 w-auto max-w-5xl">
              {/*content*/}
              <div className="bg-white relative flex w-full flex-col items-start gap-1 rounded-lg border-0 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <button className="self-end bg-transparent" onClick={() => setOpen(false)}>
                  <CloseIcon sx={{ color: '#F2F3F7' }} fontSize="large" />
                </button>
                {/*body*/}
                <div
                  onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                  }}
                  className="relative flex-auto"
                >
                  <iframe
                    width="1024"
                    height="576"
                    className="responsive-iframe aspect-video w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
                    allowfullscreen="1"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black fixed inset-0 z-40 overflow-hidden opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
