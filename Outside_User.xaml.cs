using Spire.Barcode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Comm_App_Beta
{
    /// <summary>
    /// Interaction logic for Outside_User.xaml
    /// </summary>
    public partial class Outside_User : Window
    {
        public Outside_User()
        {
            InitializeComponent();
            
            //var_data.Read_Message(valuetopass.Split(","))
        }

        private void Read_Mess_Click(object sender, RoutedEventArgs e)
        {
            Communication_DatabaseEntities1 var_data = new Communication_DatabaseEntities1();
            string valuetopass = "";
            string[] reading_image = BarcodeScanner.Scan("QRCode.png", Spire.Barcode.BarCodeType.QRCode);
            if (reading_image != null)
            {
                foreach (var item in reading_image)
                {
                    Console.WriteLine("Credentials found. Logging into system.");
                    valuetopass = item;
                }
            }
            Console.WriteLine(valuetopass);
            var call_data = valuetopass.Split(',');
            Console.WriteLine(call_data[0]);
            var call_results = var_data.Read_Message(Int32.Parse(call_data[0]));
            string final_text = "";
            foreach (var item in call_results)
            {
                if (string.IsNullOrEmpty(item.Messages))
                {
                    Message_Box_One.Text = "No new messages";
                }
                else
                {
                    Console.WriteLine(item.Time_Stamp.ToString());
                    final_text = final_text + item.Time_Stamp.ToString() + "  -->  " + item.Messages.ToString() +" \n";
                }
            }
            Message_Box_One.Text = final_text;


        }

        private void Sen_Message_Click(object sender, RoutedEventArgs e)
        {
            Communication_DatabaseEntities1 var_data = new Communication_DatabaseEntities1();
            string valuetopass = "";
            string[] reading_image = BarcodeScanner.Scan("QRCode.png", Spire.Barcode.BarCodeType.QRCode);
            if (reading_image != null)
            {
                foreach (var item in reading_image)
                {
                    Console.WriteLine("Credentials found. Logging into system.");
                    valuetopass = item;
                }
            }
            Console.WriteLine(valuetopass);
            var call_data = valuetopass.Split(',');
            Console.WriteLine(call_data[0]);
            var_data.New_Message(Int32.Parse(call_data[0]), Text_Outbound.Text);
        }
    }
}
