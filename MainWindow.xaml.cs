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
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Drawing;
using Spire.Barcode;

namespace Comm_App_Beta
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Get_AWS_Data_Click(object sender, RoutedEventArgs e)
        {
            string ID_Code = "";
            string Key_return = "";
            Communication_DatabaseEntities1 var_data = new Communication_DatabaseEntities1();
            var Key_Return = var_data.Register_User(First_Name_Input.Text, Last_Name_Input.Text);
            foreach (var item in Key_Return)
            {
                Console.WriteLine(item.Pass_Key);
                Console.WriteLine(item.User_ID);
                ID_Code = item.User_ID.ToString();
                Key_return = item.Pass_Key;

            }
            string QR_INPUT = ID_Code + "," + Key_return;
            BarcodeSettings bs = new BarcodeSettings();
            bs.Type = BarCodeType.QRCode;
            bs.Data = QR_INPUT;
            BarCodeGenerator bg = new BarCodeGenerator(bs);
            bg.GenerateImage().Save("QRCode.png");
            System.Diagnostics.Process.Start("QRCode.png");
            MessageBox.Show("User Added!");
            Outside_User enter_pass = new Outside_User();
            enter_pass.Show();
        }

        private void OutSide_Access_Click(object sender, RoutedEventArgs e)
        {
            Outside_User enter_pass = new Outside_User();
            enter_pass.Show();
        }
    }
}
