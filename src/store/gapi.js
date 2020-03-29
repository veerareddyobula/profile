const getGoogleDocsApiInstance = async () => {
  new Promise((resolve, reject) => {
    window.gapi.client.docs.documents
      .get({
        documentId: "17ZRne-mMFe86ordb19E2TSqlnJM7tQp18-PAKkjfTFA"
      })
      .then(
        response => {
          console.log("--== Categories ", response);
          resolve(response);
        },
        error => {
          reject(error);
        }
      );
  });
};

const loadGoogleDocApi = async () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
        console.log('--== Script Loaded Succesfully ==--');
      window.gapi.load("client", () => {
        window.gapi.client
          .init({
            apiKey: "AIzaSyAOtvFK-xrogKuDBlG7QZck9Jb77XCvnVg",
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4"
            ],
            clientId:
              "342704324971-89a8ri3ijk6sksgub4hll38087fjrqbp.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/documents.readonly"
          })
          .then(
            () => {
                console.log('--== I am came to resolve ==--');
              window.gapi.auth2
                .getAuthInstance()
                .isSignedIn.listen(async isSignedIn => {
                  console.log(
                    "--=== window.gapi.auth2.getAuthInstance isSignedIn ===-- ",
                    isSignedIn
                  );
                  if (isSignedIn) {
                    window.docApiInstance = await getGoogleDocsApiInstance();
                  }
                });
            },
            (error) => {
              console.log(error);
            }
          );
      });
    };

    document.body.appendChild(script);
  };

export async function getGApiInstance() {
    console.log('--=== getGApiInstance ===--');
    if(!window.docApiInstance) {
        await loadGoogleDocApi();
    }
}

export const initGApiInstance = async (dispatch) => {
    await getGApiInstance();
    dispatch({type: "INIT_GOOGLE_API_INSTANCE"})
}
