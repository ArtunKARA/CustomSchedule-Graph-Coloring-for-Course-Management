
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ApiRequestManager : MonoBehaviour
{
    [SerializeField]
    private Button _Button;
    [SerializeField]
    private TextMeshProUGUI _resultText;

    // �rnek API endpoint URL'si(Veri taban� i�in) 
    private string apiUrl = "";
    public Text classname;
    public Text classdata;


    void Start()
    {
        // Butona t�klama olay�n� dinle
        _Button.onClick.AddListener(RequestData); 
    }

    // Butona t�kland���nda �al��acak fonksiyon
    private void RequestData()
    {
        StartCoroutine(GetDataFromApi());
    }

    // veri �ekme i�lemi
    private IEnumerator GetDataFromApi()
    {
        // istek yap
        using (WWW www = new WWW(apiUrl))
        {
            yield return www;

            // �stek ba�ar�l� m� kontrol et
            if (www.error == null)
            {
                // Gelen veriyi ekrana yazd�r
                _resultText.text = "Cevap: " + www.text; 
                classname.text=_resultText.text;
                classdata.text=_resultText.text;
                Debug.Log(_resultText.text);
            }
            else
            {
                // Hata durumunda ekrana hata mesaj�n� yazd�r
                _resultText.text = " Hatal� Eri�im: " + www.error;
            }
            

        }
    }
    //JSON Format�nda verileri ekrana bast�r 
    /*https:forum.unity.com/threads/solved-deserialize-json-in-unity-c.932298*/ 
    public class ParseReceivedData
    {
        public Dictionary<string, string> response_get;

        public static ParseReceivedData CreateFromJSON(string jsonString)
        {
            return JsonUtility.FromJson<ParseReceivedData>(jsonString);
        }

        public void PrintOutput()
        {
            foreach (KeyValuePair<string, string> keyValuePair in this.response_get) 
            {
                Debug.Log(keyValuePair.Key + ": " + keyValuePair.Value);
            }
        }
    }
}




