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
    //Servisten veri almak i�in istekte bulun
    IEnumerator GetWebServiceData()
    {
        UnityWebRequest www = UnityWebRequest.Get(webServiceURL);

        yield return www.SendWebRequest();

        if (www.result != UnityWebRequest.Result.Success)
        {
            Debug.LogError("Web servisi �al��m�yor " + www.error);
        }
        else
        {
            // Web servis yan�t� ba�ar�yla al�nd�.
            Debug.Log("Web servisi �al���yor: " + www.downloadHandler.text);

            
        }

        www.Dispose(); // UnityWebRequest kullan�ld�ktan sonra belle�i serbest b�rakmak �nemlidir.
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

        // HTTP ba�lant�s� i�in g�venli�i devre d��� b�rakma (sadece test ama�l�)
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

            // Ders program�n� i�leyin ve ekrana g�sterin.
            Debug.Log($"Class Number: {response.classNumber}, Class Data: {response.classData}");
        }
    }
}