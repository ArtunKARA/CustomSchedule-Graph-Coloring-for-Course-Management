
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

    // Örnek API endpoint URL'si(Veri tabaný için) 
    private string apiUrl = "";
    public Text classname;
    public Text classdata;


    void Start()
    {
        // Butona týklama olayýný dinle
        _Button.onClick.AddListener(RequestData); 
    }

    // Butona týklandýðýnda çalýþacak fonksiyon
    private void RequestData()
    {
        StartCoroutine(GetDataFromApi());
    }

    // veri çekme iþlemi
    private IEnumerator GetDataFromApi()
    {
        // istek yap
        using (WWW www = new WWW(apiUrl))
        {
            yield return www;

            // Ýstek baþarýlý mý kontrol et
            if (www.error == null)
            {
                // Gelen veriyi ekrana yazdýr
                _resultText.text = "Cevap: " + www.text; 
                classname.text=_resultText.text;
                classdata.text=_resultText.text;
                Debug.Log(_resultText.text);
            }
            else
            {
                // Hata durumunda ekrana hata mesajýný yazdýr
                _resultText.text = " Hatalý Eriþim: " + www.error;
            }
            

        }
    }
    //JSON Formatýnda verileri ekrana bastýr 
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




