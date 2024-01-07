using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.XR.ARFoundation;


public class ArScript : MonoBehaviour
{
    
    public string webServiceURL = "";


    public string WebServicesURL
    {
        get => webServiceURL;
        set => webServiceURL = value;
    }

    void Start()
    {
        StartCoroutine(GetWebServiceData());
    }
    //Servisten veri almak için istekte bulun
    IEnumerator GetWebServiceData()
    {
        UnityWebRequest www = UnityWebRequest.Get(webServiceURL);

        yield return www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError("Web servisi çalýþmýyor " + www.error);
        }
        else
        {
            // Web servis yanýtý baþarýyla alýndý.
            Debug.Log("Web servisi çalýþýyor: " + www.downloadHandler.text);

            
        }

        www.Dispose(); // UnityWebRequest kullanýldýktan sonra belleði serbest býrakmak önemlidir.
    }

    [System.Serializable]
    public class ClassDataResponse
    {
        public string classNumber;
        public string classData;
    }

    IEnumerator GetClassData(string classNumber)
    {
        string Url = $"{webServiceURL}?classNumber={classNumber}";
        UnityWebRequest www = UnityWebRequest.Get(Url);

        // HTTP baðlantýsý için güvenliði devre dýþý býrakma (sadece test amaçlý)
        www.downloadHandler = new DownloadHandlerBuffer();

        yield return www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError(www.error);
        }
        else
        {
            string jsonResponse = www.downloadHandler.text;
            ClassDataResponse response = JsonUtility.FromJson<ClassDataResponse>(jsonResponse);

            // Ders programýný iþleyin ve ekrana gösterin.
            Debug.Log($"Class Number: {response.classNumber}, Class Data: {response.classData}");
        }
    }
}