import CloseIcon from '@mui/icons-material/Close';

export default function VideoModal({ open, setOpen, videoId }) {
  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neo-75 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl bg-primary-50">
              {/*content*/}
              <div className="bg-white relative flex w-full flex-col rounded-lg border-0 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <iframe
                    width="560"
                    height="315"
                    className="responsive-iframe aspect-video w-full"
                    // src="https://www.youtube.com/embed/HE6-EB3slPQ"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black fixed inset-0 z-40 opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
